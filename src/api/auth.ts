const HOST_URL = import.meta.env.VITE_BACKEND_HOST;
import { getToken } from '../utils/auth';

// Config API functions
export async function fetchConfigs() {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const response = await fetch(HOST_URL + 'v1/config', {
    method: 'GET',
    headers,
  });
  if (!response.ok) {
    let errorMsg = 'Failed to fetch configs';
    try {
      const errorJson = await response.json();
      errorMsg = errorJson.detail || JSON.stringify(errorJson);
    } catch {
      errorMsg = (await response.text()) || errorMsg;
    }
    throw new Error(errorMsg);
  }
  return response.json();
}

export async function createConfig(config: Record<string, unknown>) {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const response = await fetch(HOST_URL + 'v1/config', {
    method: 'POST',
    headers,
    body: JSON.stringify(config),
  });
  if (!response.ok) {
    let errorMsg = 'Failed to create config';
    try {
      const errorJson = await response.json();
      errorMsg = errorJson.detail || JSON.stringify(errorJson);
    } catch {
      errorMsg = (await response.text()) || errorMsg;
    }
    throw new Error(errorMsg);
  }
  return response.json();
}

export async function updateConfig(configId: number, config: Record<string, unknown>) {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const response = await fetch(HOST_URL + `v1/config/${configId}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(config),
  });
  if (!response.ok) {
    let errorMsg = 'Failed to update config';
    try {
      const errorJson = await response.json();
      errorMsg = errorJson.detail || JSON.stringify(errorJson);
    } catch {
      errorMsg = (await response.text()) || errorMsg;
    }
    throw new Error(errorMsg);
  }
  return response.json();
}

export async function deleteConfig(configId: number) {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const response = await fetch(HOST_URL + `v1/config/${configId}`, {
    method: 'DELETE',
    headers,
  });
  if (!response.ok) {
    let errorMsg = 'Failed to delete config';
    try {
      const errorJson = await response.json();
      errorMsg = errorJson.detail || JSON.stringify(errorJson);
    } catch {
      errorMsg = (await response.text()) || errorMsg;
    }
    throw new Error(errorMsg);
  }
  return response.json();
}

export async function fetchCandidates(skip = 0, limit = 10) {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const response = await fetch(HOST_URL + `v1/candidates/?skip=${skip}&limit=${limit}`, {
    method: 'GET',
    headers,
  });
  if (!response.ok) {
    let errorMsg = 'Failed to fetch candidates';
    try {
      const errorJson = await response.json();
      errorMsg = errorJson.detail || JSON.stringify(errorJson);
    } catch {
      errorMsg = (await response.text()) || errorMsg;
    }
    throw new Error(errorMsg);
  }
  return response.json();
}

export async function createCandidate(candidate: Record<string, unknown>) {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const response = await fetch(HOST_URL + 'v1/candidates/', {
    method: 'POST',
    headers,
    body: JSON.stringify(candidate),
  });
  if (!response.ok) {
    let errorMsg = 'Failed to create candidate';
    try {
      const errorJson = await response.json();
      errorMsg = errorJson.detail || JSON.stringify(errorJson);
    } catch {
      errorMsg = (await response.text()) || errorMsg;
    }
    throw new Error(errorMsg);
  }
  return response.json();
}

export async function updateCandidate(candidateId: number, candidate: Record<string, unknown>) {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const response = await fetch(HOST_URL + `v1/candidates/${candidateId}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(candidate),
  });
  if (!response.ok) {
    let errorMsg = 'Failed to update candidate';
    try {
      const errorJson = await response.json();
      errorMsg = errorJson.detail || JSON.stringify(errorJson);
    } catch {
      errorMsg = (await response.text()) || errorMsg;
    }
    throw new Error(errorMsg);
  }
  return response.json();
}

export async function createUser(user: Record<string, unknown>) {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const response = await fetch(HOST_URL + 'v1/auth/register', {
    method: 'POST',
    headers,
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    let errorMsg = 'Failed to create user';
    try {
      const errorJson = await response.json();
      errorMsg = errorJson.detail || JSON.stringify(errorJson);
    } catch {
      errorMsg = (await response.text()) || errorMsg;
    }
    throw new Error(errorMsg);
  }
  return response.json();
}

export async function updateUser(userId: number, user: Record<string, unknown>) {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const response = await fetch(HOST_URL + `v1/auth/${userId}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    let errorMsg = 'Failed to update user';
    try {
      const errorJson = await response.json();
      errorMsg = errorJson.detail || JSON.stringify(errorJson);
    } catch {
      errorMsg = (await response.text()) || errorMsg;
    }
    throw new Error(errorMsg);
  }
  return response.json();
}

export async function fetchJobPosts() {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const response = await fetch(HOST_URL + 'v1/jobposts/', {
    method: 'GET',
    headers,
  });
  if (!response.ok) {
    let errorMsg = 'Failed to fetch job posts';
    try {
      const errorJson = await response.json();
      errorMsg = errorJson.detail || JSON.stringify(errorJson);
    } catch {
      errorMsg = (await response.text()) || errorMsg;
    }
    throw new Error(errorMsg);
  }
  return response.json();
}

export async function createJobPost(jobPost: Record<string, unknown>) {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const response = await fetch(HOST_URL + 'v1/jobposts/', {
    method: 'POST',
    headers,
    body: JSON.stringify(jobPost),
  });
  if (!response.ok) {
    let errorMsg = 'Failed to create job post';
    try {
      const errorJson = await response.json();
      errorMsg = errorJson.detail || JSON.stringify(errorJson);
    } catch {
      errorMsg = (await response.text()) || errorMsg;
    }
    throw new Error(errorMsg);
  }
  return response.json();
}

export async function updateJobPost(jobId: number, jobPost: Record<string, unknown>) {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const response = await fetch(HOST_URL + `v1/jobposts/${jobId}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(jobPost),
  });
  if (!response.ok) {
    let errorMsg = 'Failed to update job post';
    try {
      const errorJson = await response.json();
      errorMsg = errorJson.detail || JSON.stringify(errorJson);
    } catch {
      errorMsg = (await response.text()) || errorMsg;
    }
    throw new Error(errorMsg);
  }
  return response.json();
}

export async function fetchUsers() {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const response = await fetch(HOST_URL + 'v1/users', {
    method: 'GET',
    headers,
  });
  if (!response.ok) {
    let errorMsg = 'Failed to fetch users';
    try {
      const errorJson = await response.json();
      errorMsg = errorJson.detail || JSON.stringify(errorJson);
    } catch {
      errorMsg = (await response.text()) || errorMsg;
    }
    throw new Error(errorMsg);
  }
  return response.json();
}

/**
 * Fetch user details using the access token.
 * @param token - JWT access token
 * @returns Response from /api/v1/auth/me
 */
export async function fetchUserDetails(token: string) {
  const res = await fetch(HOST_URL + 'v1/auth/me', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    let errorMsg = 'Failed to fetch user details';
    try {
      const errorJson = await res.json();
      errorMsg = errorJson.detail || JSON.stringify(errorJson);
    } catch {
      errorMsg = (await res.text()) || errorMsg;
    }
    throw new Error(errorMsg);
  }
  return res;
}

export async function loginApi(username: string, password: string) {
  const res = await fetch(HOST_URL + 'v1/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
  });
  if (!res.ok) {
    let errorMsg = 'Failed to login';
    try {
      const errorJson = await res.json();
      errorMsg = errorJson.detail || JSON.stringify(errorJson);
    } catch {
      errorMsg = (await res.text()) || errorMsg;
    }
    throw new Error(errorMsg);
  }
  return res;
}
