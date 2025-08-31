"use client";

import { useState } from 'react';
import { CreateProjectData } from '@/lib/types';

interface CreateProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProjectCreated: () => void;
  onShowBetaToast: () => void; // Nou prop pentru a afișa toast-ul
}

export default function CreateProjectModal({ 
  isOpen, 
  onClose, 
  onProjectCreated,
  onShowBetaToast
}: CreateProjectModalProps) {
  
  const [formData, setFormData] = useState<CreateProjectData>({
    name: '',
    description: '',
    contact_email: '',
    contact_phone: '',
    website_url: '',
    project_type: '',
    project_value: undefined,
    estimated_completion_date: ''
  });

  const [loading, setLoading] = useState(false);

  const projectTypes = [
    'Website Corporativ',
    'E-commerce',
    'SaaS Platform', 
    'Mobile App',
    'Web App',
    'Landing Page',
    'Portfolio',
    'Blog',
    'Altele'
  ];

  const handleInputChange = (field: string, value: string | number | string[] | undefined) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const checkExistingProjects = async (): Promise<boolean> => {
    try {
      const response = await fetch('/api/projects');
      if (response.ok) {
        const data = await response.json();
        return data.projects && data.projects.length > 0;
      }
      return false;
    } catch (error) {
      console.error('Error checking existing projects:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    console.log('Submitting form data:', formData);

    try {
      // Check if projects already exist
      const hasExistingProjects = await checkExistingProjects();
      
      if (hasExistingProjects) {
        // Show BETA toast and close modal
        onShowBetaToast();
        onClose();
        setLoading(false);
        return;
      }

      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);
      
      if (response.ok) {
        // Reset form
        setFormData({
          name: '',
          description: '',
          contact_email: '',
          contact_phone: '',
          website_url: '',
          project_type: '',
          project_value: undefined,
          estimated_completion_date: ''
        });
        onProjectCreated();
        onClose();
      } else {
        const error = await response.json();
        console.error('API Error:', error);
        console.error('Response status:', response.status);
        alert(`Error ${response.status}: ${error.error || 'An error occurred'}`);
      }
    } catch (error) {
      console.error('Error creating project:', error);
      alert('An error occurred while creating the project');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Create New Project</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nume Proiect - Required */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nume Proiect *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900 placeholder-gray-400"
              placeholder="ex: Website AutoBots"
            />
          </div>

          {/* Descriere */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Descriere
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900 placeholder-gray-400"
              placeholder="Descrierea scurtă a proiectului..."
              rows={3}
            />
          </div>

          {/* Contact Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Contact
            </label>
            <input
              type="email"
              value={formData.contact_email}
              onChange={(e) => handleInputChange('contact_email', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900 placeholder-gray-400"
              placeholder="client@example.com"
            />
          </div>

          {/* Contact Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Telefon Contact
            </label>
            <input
              type="tel"
              value={formData.contact_phone}
              onChange={(e) => handleInputChange('contact_phone', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900 placeholder-gray-400"
              placeholder="+40 700 000 000"
            />
          </div>

          {/* Website URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              URL Website
            </label>
            <input
              type="url"
              value={formData.website_url}
              onChange={(e) => handleInputChange('website_url', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900 placeholder-gray-400"
              placeholder="https://example.com"
            />
          </div>

          {/* Project Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipul Proiectului
            </label>
            <select
              value={formData.project_type}
              onChange={(e) => handleInputChange('project_type', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900"
            >
              <option value="">Selectează tipul proiectului</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Project Value */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Valoare Proiect (€)
            </label>
            <input
              type="number"
              min="0"
              step="100"
              value={formData.project_value || ''}
              onChange={(e) => handleInputChange('project_value', e.target.value ? Number(e.target.value) : undefined)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900 placeholder-gray-400"
              placeholder="5000"
            />
          </div>

          {/* Estimated Completion Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Data Estimată de Finalizare
            </label>
            <input
              type="date"
              value={formData.estimated_completion_date}
              onChange={(e) => handleInputChange('estimated_completion_date', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 pt-6 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || !formData.name.trim()}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
            >
              {loading && (
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              <span>{loading ? 'Creating...' : 'Create Project'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 
