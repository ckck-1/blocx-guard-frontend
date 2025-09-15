import { useState, useEffect } from 'react';
import apiClient from '@/services/api/apiClient';

const TestConnection = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const testConnection = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get('/health');
        setData(response);
        setError('');
      } catch (err: any) {
        console.error('Connection test failed:', err);
        setError(err.message || 'Failed to connect to the backend');
      } finally {
        setLoading(false);
      }
    };

    testConnection();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Backend Connection Test
        </h1>
        
        <div className="space-y-4">
          <div className="p-4 border rounded-md">
            <h2 className="font-semibold text-gray-700 mb-2">Connection Status:</h2>
            {loading ? (
              <div className="flex items-center text-blue-600">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                <span>Connecting to backend...</span>
              </div>
            ) : error ? (
              <div className="text-red-600">
                <p>❌ Connection failed</p>
                <p className="text-sm mt-1">{error}</p>
              </div>
            ) : (
              <div className="text-green-600">
                <p>✅ Successfully connected to backend!</p>
              </div>
            )}
          </div>

          {data && (
            <div className="p-4 border rounded-md">
              <h2 className="font-semibold text-gray-700 mb-2">Response from backend:</h2>
              <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
                {JSON.stringify(data, null, 2)}
              </pre>
            </div>
          )}

          {error && (
            <div className="p-4 border border-red-200 bg-red-50 rounded-md">
              <h2 className="font-semibold text-red-700 mb-2">Troubleshooting:</h2>
              <ul className="list-disc pl-5 space-y-1 text-sm text-red-600">
                <li>Make sure the backend server is running on port 5000</li>
                <li>Check the browser's developer console for detailed error messages</li>
                <li>Verify CORS settings in the backend configuration</li>
                <li>Ensure the backend URL in .env is correct</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestConnection;
