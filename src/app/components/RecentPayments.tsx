// components/RecentPayments.tsx
'use client';

import { useState, useEffect } from 'react';
import { Payment } from '@/lib/types';
import { CreditCard, Calendar, CheckCircle, XCircle, Clock, DollarSign } from 'lucide-react';

export default function RecentPayments() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/payments');
      
      if (!response.ok) {
        throw new Error('Failed to fetch payments');
      }
      
      const data = await response.json();
      setPayments(data.payments || []);
    } catch (error) {
      console.error('Error fetching payments:', error);
      setError('Nu s-au putut încărca plățile');
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: Payment['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'failed':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'refunded':
        return <XCircle className="w-5 h-5 text-orange-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusText = (status: Payment['status']) => {
    switch (status) {
      case 'completed':
        return 'Completată';
      case 'failed':
        return 'Eșuată';
      case 'pending':
        return 'În așteptare';
      case 'refunded':
        return 'Rambursată';
      default:
        return 'Necunoscută';
    }
  };

  const getStatusColor = (status: Payment['status']) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-50';
      case 'failed':
        return 'text-red-600 bg-red-50';
      case 'pending':
        return 'text-yellow-600 bg-yellow-50';
      case 'refunded':
        return 'text-orange-600 bg-orange-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getPaymentTypeText = (paymentType: Payment['payment_type']) => {
    switch (paymentType) {
      case 'one_time':
        return 'Plată unică';
      case 'monthly_maintenance':
        return 'Mentenanță lunară';
      default:
        return paymentType;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ro-RO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatAmount = (amount: number, currency: string) => {
    return new Intl.NumberFormat('ro-RO', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <CreditCard className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-900">Recent Payments</h2>
        </div>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-4">
          <CreditCard className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-900">Recent Payments</h2>
        </div>
        <div className="text-center py-8">
          <XCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <p className="text-gray-600">{error}</p>
          <button
            onClick={fetchPayments}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Încearcă din nou
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <CreditCard className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-900">Recent Payments</h2>
      </div>

      {payments.length === 0 ? (
        <div className="text-center py-8">
          <DollarSign className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">No payments have been recorded yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {payments.slice(0, 10).map((payment) => (
            <div
              key={payment.id}
              className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                {getStatusIcon(payment.status)}
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-gray-900">
                      {getPaymentTypeText(payment.payment_type)}
                    </h3>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                        payment.status
                      )}`}
                    >
                      {getStatusText(payment.status)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {payment.description || 'Fără descriere'}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-500">
                      {formatDate(payment.payment_date)}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="font-semibold text-lg text-gray-900">
                  {formatAmount(payment.amount, payment.currency)}
                </div>
                <div className="text-xs text-gray-500">
                  ID: {payment.stripe_payment_id.slice(-8)}
                </div>
              </div>
            </div>
          ))}

          {payments.length > 10 && (
            <div className="text-center pt-4">
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Vezi toate plățile ({payments.length})
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}