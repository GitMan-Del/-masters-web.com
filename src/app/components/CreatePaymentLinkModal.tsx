// components/CreatePaymentLinkModal.tsx
'use client';

import { useState } from 'react';
import { CreatePaymentData, StripePaymentLinkData } from '@/lib/types';
import { X, DollarSign, Mail, FileText, CreditCard } from 'lucide-react';

interface CreatePaymentLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPaymentLinkCreated?: (data: StripePaymentLinkData) => void;
}

export default function CreatePaymentLinkModal({ 
  isOpen, 
  onClose, 
  onPaymentLinkCreated 
}: CreatePaymentLinkModalProps) {
  
  const [formData, setFormData] = useState<CreatePaymentData>({
    user_email: '',
    payment_type: 'one_time',
    amount: 0,
    currency: 'RON',
    description: '',
    metadata: {}
  });

  const [loading, setLoading] = useState(false);
  const [createdPaymentLink, setCreatedPaymentLink] = useState<StripePaymentLinkData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (field: keyof CreatePaymentData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Validare
      if (!formData.user_email || !formData.amount || formData.amount <= 0) {
        throw new Error('Te rog completează toate câmpurile obligatorii.');
      }

      const response = await fetch('/api/payments/create-payment-link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'A apărut o eroare la crearea link-ului de plată.');
      }

      const paymentLinkData: StripePaymentLinkData = await response.json();
      setCreatedPaymentLink(paymentLinkData);
      
      if (onPaymentLinkCreated) {
        onPaymentLinkCreated(paymentLinkData);
      }

    } catch (error) {
      console.error('Error creating payment link:', error);
      setError(error instanceof Error ? error.message : 'A apărut o eroare neașteptată.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setFormData({
      user_email: '',
      payment_type: 'one_time',
      amount: 0,
      currency: 'RON',
      description: '',
      metadata: {}
    });
    setCreatedPaymentLink(null);
    setError(null);
    onClose();
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // Ar putea fi folosit un toast notification aici
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">
                Creează Payment Link
              </h2>
            </div>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {!createdPaymentLink ? (
            /* Form pentru crearea payment link-ului */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email utilizator */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-1" />
                  Email client *
                </label>
                <input
                  type="email"
                  value={formData.user_email}
                  onChange={(e) => handleInputChange('user_email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="client@example.com"
                  required
                />
              </div>

              {/* Tipul plății */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipul plății *
                </label>
                <select
                  value={formData.payment_type}
                  onChange={(e) => handleInputChange('payment_type', e.target.value as 'one_time' | 'monthly_maintenance')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="one_time">Plată unică (Website)</option>
                  <option value="monthly_maintenance">Mentenanță lunară</option>
                </select>
              </div>

              {/* Suma */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <DollarSign className="w-4 h-4 inline mr-1" />
                  Suma *
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={formData.amount}
                    onChange={(e) => handleInputChange('amount', parseFloat(e.target.value) || 0)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    required
                  />
                  <select
                    value={formData.currency}
                    onChange={(e) => handleInputChange('currency', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="RON">RON</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                  </select>
                </div>
              </div>

              {/* Descriere */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FileText className="w-4 h-4 inline mr-1" />
                  Descriere
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Descrierea serviciului..."
                  rows={3}
                />
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  disabled={loading}
                >
                  Anulează
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {loading ? 'Se creează...' : 'Creează Link'}
                </button>
              </div>
            </form>
          ) : (
            /* Afișare link creat */
            <div className="space-y-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Payment Link Creat!
                </h3>
                <p className="text-gray-600">
                  Link-ul de plată a fost generat cu succes pentru {createdPaymentLink.user_email}
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Payment Link
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={createdPaymentLink.payment_link_url}
                      readOnly
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                    />
                    <button
                      onClick={() => copyToClipboard(createdPaymentLink.payment_link_url)}
                      className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Copiază
                    </button>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-sm text-blue-700">
                    <strong>Suma:</strong> {new Intl.NumberFormat('ro-RO', {
                      style: 'currency',
                      currency: createdPaymentLink.user_email ? 'RON' : 'RON',
                    }).format(createdPaymentLink.amount)}
                  </p>
                  <p className="text-sm text-blue-700">
                    <strong>Tip:</strong> {
                      createdPaymentLink.payment_type === 'one_time' 
                        ? 'Plată unică' 
                        : 'Mentenanță lunară'
                    }
                  </p>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Închide
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}