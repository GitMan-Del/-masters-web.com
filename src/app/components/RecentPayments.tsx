"use client";

interface Payment {
  description: string;
  amount: string;
  status: 'Paid' | 'Pending';
}

export default function RecentPayments() {
  const payments: Payment[] = [
    { description: "AutoBots SaaS", amount: "€2,500", status: "Paid" },
    { description: "E-commerce Store", amount: "€1,500", status: "Paid" },
    { description: "Landing Page", amount: "€400", status: "Pending" },
    { description: "Website Redesign", amount: "€900", status: "Paid" },
    { description: "Mobile App UI", amount: "€1,200", status: "Paid" },
    { description: "Brand Identity", amount: "€800", status: "Pending" },
    { description: "Dashboard Analytics", amount: "€600", status: "Paid" },
    { description: "SEO Optimization", amount: "€300", status: "Paid" },
    { description: "Social Media Kit", amount: "€450", status: "Pending" },
    { description: "API Integration", amount: "€750", status: "Paid" }
  ];

  const totalAmount = payments.reduce((sum, payment) => {
    return sum + parseInt(payment.amount.replace('€', '').replace(',', ''));
  }, 0);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-full flex flex-col">
      <div className="p-3 border-b border-gray-200 flex-shrink-0">
        <h3 className="text-xl text-gray-900">Recent Payments</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3 space-y-2 max-h-80">
        {payments.map((payment, index) => (
          <div key={index} className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg flex-shrink-0">
            <div>
              <div className="text-xs font-medium text-gray-900">{payment.description}</div>
              <div className="text-xs text-gray-500">{payment.amount}</div>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${
              payment.status === 'Paid' 
                ? 'bg-green-100 text-green-700' 
                : 'bg-yellow-100 text-yellow-700'
            }`}>
              {payment.status}
            </span>
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-gray-200 flex-shrink-0">
        <div className="text-xs text-gray-600 text-center">
          <span className="font-medium">Total: €{totalAmount.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}