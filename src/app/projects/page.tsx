"use client"

import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";
import { Project } from "@/lib/types";
import Toast from "../components/Toast";

export default function ProjectsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
    show: boolean;
  }>({ message: '', type: 'info', show: false });

  // Redirect dacă nu este autentificat
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/?error=auth_required');
    }
  }, [status, router]);

  // Fetch projects
  const fetchProjects = useCallback(async () => {
    if (!session?.user?.email) return;

    try {
      setLoading(true);
      const response = await fetch('/api/projects');
      
      if (response.ok) {
        const data = await response.json();
        setProjects(data.projects || []);
        setError(null);
      } else {
        setError('Failed to fetch projects');
      }
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError('Error loading projects');
    } finally {
      setLoading(false);
    }
  }, [session?.user?.email]);

  useEffect(() => {
    fetchProjects();
  }, [session, fetchProjects]);

  // Delete project
  const handleDeleteProject = async (projectId: string) => {
    try {
      setDeletingId(projectId);
      const response = await fetch(`/api/projects/${projectId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Remove project from local state
        setProjects(prev => prev.filter(p => p.id !== projectId));
        setToast({
          message: 'Project deleted successfully!',
          type: 'success',
          show: true
        });
      } else {
        const error = await response.json();
        setToast({
          message: `Delete error: ${error.error || 'Unknown error'}`,
          type: 'error',
          show: true
        });
      }
    } catch (error) {
      console.error('Error deleting project:', error);
      setToast({
        message: 'Error deleting project',
        type: 'error',
        show: true
      });
    } finally {
      setDeletingId(null);
      setShowDeleteConfirm(null);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ro-RO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      planning: { color: 'bg-blue-100 text-blue-800', text: 'Planificare' },
      development: { color: 'bg-yellow-100 text-yellow-800', text: 'Dezvoltare' },
      testing: { color: 'bg-purple-100 text-purple-800', text: 'Testare' },
      deployment: { color: 'bg-orange-100 text-orange-800', text: 'Deployment' },
      completed: { color: 'bg-green-100 text-green-800', text: 'Completat' },
      maintenance: { color: 'bg-gray-100 text-gray-800', text: 'Mentenanță' }
    };
    
    const badge = badges[status as keyof typeof badges] || badges.planning;
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badge.color}`}>
        {badge.text}
      </span>
    );
  };

  // Loading state
  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading projects...</p>
        </div>
      </div>
    );
  }

  // Not authenticated
  if (status === 'unauthenticated') {
    return null;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Proiectele Mele</h1>
            <p className="text-gray-600 mt-2">Gestionează toate proiectele tale</p>
          </div>

          {/* Error State */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-800">{error}</p>
              <button 
                onClick={fetchProjects}
                className="mt-2 text-red-600 hover:text-red-800 font-medium"
              >
                Încearcă din nou
              </button>
            </div>
          )}

          {/* Projects List */}
          {projects.length === 0 ? (
            <div className="text-center py-12">
              <div className="mx-auto h-12 w-12 text-gray-400 mb-4">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Nu ai proiecte încă</h3>
              <p className="text-gray-500 mb-4">Creează primul tău proiect pentru a începe.</p>
              <button 
                onClick={() => router.push('/dashboard')}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Mergi la Dashboard
              </button>
            </div>
          ) : (
            <div className="grid gap-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
                        {getStatusBadge(project.status)}
                      </div>
                      
                      {project.description && (
                        <p className="text-gray-600 mb-4">{project.description}</p>
                      )}
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-500">Tip proiect:</span>
                          <p className="text-gray-900">{project.project_type || 'Nu este specificat'}</p>
                        </div>
                        
                        <div>
                          <span className="font-medium text-gray-500">Valoare:</span>
                          <p className="text-gray-900">
                            {project.project_value ? `€${project.project_value.toLocaleString()}` : 'Nu este specificată'}
                          </p>
                        </div>
                        
                        <div>
                          <span className="font-medium text-gray-500">Progres:</span>
                          <p className="text-gray-900">{project.progress}%</p>
                        </div>
                        
                        <div>
                          <span className="font-medium text-gray-500">Creat:</span>
                          <p className="text-gray-900">{formatDate(project.created_at)}</p>
                        </div>
                      </div>
                      
                      {(project.contact_email || project.contact_phone || project.website_url) && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <div className="flex flex-wrap gap-4 text-sm">
                            {project.contact_email && (
                              <a href={`mailto:${project.contact_email}`} className="text-purple-600 hover:text-purple-800">
                                📧 {project.contact_email}
                              </a>
                            )}
                            {project.contact_phone && (
                              <a href={`tel:${project.contact_phone}`} className="text-purple-600 hover:text-purple-800">
                                📞 {project.contact_phone}
                              </a>
                            )}
                            {project.website_url && (
                              <a href={project.website_url} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800">
                                🌐 Website
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Actions */}
                    <div className="ml-6 flex flex-col gap-2">
                      <button
                        onClick={() => setShowDeleteConfirm(project.id)}
                        disabled={deletingId === project.id}
                        className="bg-red-50 text-red-600 px-3 py-2 rounded-lg hover:bg-red-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                      >
                        {deletingId === project.id ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-600"></div>
                            Deleting...
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Delete
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Delete Confirmation</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this project? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowDeleteConfirm(null)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteProject(showDeleteConfirm)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.show}
        onClose={() => setToast(prev => ({ ...prev, show: false }))}
      />
    </div>
  );
} 