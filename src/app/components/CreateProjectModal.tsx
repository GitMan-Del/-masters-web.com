"use client";

import { useState } from 'react';
import { CreateProjectData } from '@/lib/types';

interface CreateProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProjectCreated: () => void;
}

export default function CreateProjectModal({ 
  isOpen, 
  onClose, 
  onProjectCreated 
}: CreateProjectModalProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<CreateProjectData>({
    name: '',
    description: '',
    contact_email: '',
    contact_phone: '',
    website_url: '',
    project_type: '',
    technology_stack: [],
    project_value: undefined,
    estimated_completion_date: ''
  });

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

  const techStacks = [
    'React.js',
    'Next.js',
    'Vue.js',
    'Angular',
    'Node.js',
    'Laravel',
    'WordPress',
    'Shopify',
    'Python',
    'TypeScript'
  ];

  const handleInputChange = (field: keyof CreateProjectData, value: string | number | string[] | undefined) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleTechStackChange = (tech: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      technology_stack: checked 
        ? [...(prev.technology_stack || []), tech]
        : (prev.technology_stack || []).filter(t => t !== tech)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Reset form
        setFormData({
          name: '',
          description: '',
          contact_email: '',
          contact_phone: '',
          website_url: '',
          project_type: '',
          technology_stack: [],
          project_value: undefined,
          estimated_completion_date: ''
        });
        onProjectCreated();
        onClose();
      } else {
        const error = await response.json();
        alert(error.error || 'A apărut o eroare');
      }
    } catch (error) {
      console.error('Error creating project:', error);
      alert('A apărut o eroare la crearea proiectului');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Creează Proiect Nou</h2>
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="ex: Website AutoBots"
            />
          </div>

          {/* Descriere */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Descrierea Proiectului
            </label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="Descriere scurtă a proiectului..."
            />
          </div>

          {/* Contact Info Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Contact
              </label>
              <input
                type="email"
                value={formData.contact_email}
                onChange={(e) => handleInputChange('contact_email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="client@example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Telefon Contact
              </label>
              <input
                type="tel"
                value={formData.contact_phone}
                onChange={(e) => handleInputChange('contact_phone', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="+40 123 456 789"
              />
            </div>
          </div>

          {/* Project Details Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Website URL
              </label>
              <input
                type="url"
                value={formData.website_url}
                onChange={(e) => handleInputChange('website_url', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="https://example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipul Proiectului
              </label>
              <select
                value={formData.project_type}
                onChange={(e) => handleInputChange('project_type', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              >
                <option value="">Selectează tipul</option>
                {projectTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Technology Stack */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Tehnologii Folosite
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {techStacks.map(tech => (
                <label key={tech} className="flex items-center space-x-2 text-sm">
                  <input
                    type="checkbox"
                    checked={(formData.technology_stack || []).includes(tech)}
                    onChange={(e) => handleTechStackChange(tech, e.target.checked)}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-600"
                  />
                  <span>{tech}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Financial & Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Valoarea Proiectului (EUR)
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={formData.project_value || ''}
                onChange={(e) => handleInputChange('project_value', parseFloat(e.target.value) || undefined)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="2500.00"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Data Estimată de Finalizare
              </label>
              <input
                type="date"
                value={formData.estimated_completion_date}
                onChange={(e) => handleInputChange('estimated_completion_date', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 pt-6 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Anulează
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
              <span>{loading ? 'Se creează...' : 'Creează Proiectul'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 