import apiClient from './apiClient';

export interface Policy {
  _id?: string;
  name: string;
  description: string;
  coverageAmount: number;
  premium: number;
  duration: number; // in days
  status?: 'active' | 'expired' | 'claimed';
  userId?: string;
  startDate?: Date;
  endDate?: Date;
}

export const getPolicies = async (): Promise<Policy[]> => {
  const response = await apiClient.get<Policy[]>('/policies');
  return response;
};

export const getPolicyById = async (id: string): Promise<Policy> => {
  const response = await apiClient.get<Policy>(`/policies/${id}`);
  return response;
};

export const createPolicy = async (policyData: Omit<Policy, '_id' | 'status'>): Promise<Policy> => {
  const response = await apiClient.post<Policy>('/policies', policyData);
  return response;
};

export const updatePolicy = async (id: string, policyData: Partial<Policy>): Promise<Policy> => {
  const response = await apiClient.put<Policy>(`/policies/${id}`, policyData);
  return response;
};

export const deletePolicy = async (id: string): Promise<void> => {
  await apiClient.delete(`/policies/${id}`);
};

export const getUserPolicies = async (userId: string): Promise<Policy[]> => {
  const response = await apiClient.get<Policy[]>(`/policies/user/${userId}`);
  return response;
};
