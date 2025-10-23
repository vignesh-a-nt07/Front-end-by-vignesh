import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { fetchCandidates } from '../api/auth';

interface Candidate {
  job_post_id: number;
  name: string;
  current_location: string;
  email: string;
  contact_number: string;
  slot_availability: string;
  rate_card_hourly: number;
  experience_years: number;
  visa_type: string;
  willing_to_relocate: boolean;
  overall_gpt_score: number;
  notice_period_days: number;
  cv_file_url: string;
  remarks: string;
  id: number;
  created_at: string;
}

const CandidatesPage: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'error' as 'error' });

  useEffect(() => {
    fetchCandidates(0, 10)
      .then((data) => {
        setCandidates(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch candidates');
        setSnackbar({ open: true, message: err?.message || 'Failed to fetch candidates', severity: 'error' });
        setLoading(false);
      });
  }, []);

  if (loading) return <Typography>Loading...</Typography>;

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }} color="primary" gutterBottom>Candidates</Typography>
      <div style={{ width: '100%', overflowX: 'auto' }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Job Post ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Current Location</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Contact Number</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Slot Availability</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Rate Card (Hourly)</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Experience (Years)</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Visa Type</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Willing to Relocate</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>GPT Score</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Notice Period (Days)</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>CV</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Remarks</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Created At</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {candidates.map((candidate) => (
                <TableRow key={candidate.id}>
                  <TableCell>{candidate.job_post_id}</TableCell>
                  <TableCell>{candidate.name}</TableCell>
                  <TableCell>{candidate.current_location}</TableCell>
                  <TableCell>{candidate.email}</TableCell>
                  <TableCell>{candidate.contact_number}</TableCell>
                  <TableCell>{candidate.slot_availability ? new Date(candidate.slot_availability).toLocaleString() : ''}</TableCell>
                  <TableCell>{candidate.rate_card_hourly}</TableCell>
                  <TableCell>{candidate.experience_years}</TableCell>
                  <TableCell>{candidate.visa_type}</TableCell>
                  <TableCell>{candidate.willing_to_relocate ? 'Yes' : 'No'}</TableCell>
                  <TableCell>{candidate.overall_gpt_score}</TableCell>
                  <TableCell>{candidate.notice_period_days}</TableCell>
                  <TableCell><a href={candidate.cv_file_url} target="_blank" rel="noopener noreferrer">CV</a></TableCell>
                  <TableCell>{candidate.remarks}</TableCell>
                  <TableCell>{candidate.created_at ? new Date(candidate.created_at).toLocaleString() : ''}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity={snackbar.severity} sx={{ width: '100%' }} onClose={() => setSnackbar({ ...snackbar, open: false })}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default CandidatesPage;
