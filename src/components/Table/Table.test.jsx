import { render, screen } from '@testing-library/react';
import Table from './Table';

// data for testing
const projects = [
  { 's.no': 1, 'percentage.funded': 50, 'amt.pledged': 5000 },
  { 's.no': 2, 'percentage.funded': 30, 'amt.pledged': 3000 },
];

describe('Table Component', () => {
  test('renders table without crashing', () => {
    render(<Table projects={projects} />);
    expect(screen.getByRole('table')).toBeInTheDocument(); 
  });

  test('renders correct column headers', () => {
    render(<Table projects={projects} />);
    expect(screen.getByText(/s\.no/i)).toBeInTheDocument();
    expect(screen.getByText(/percentage funded/i)).toBeInTheDocument();
    expect(screen.getByText(/amount pledged/i)).toBeInTheDocument();
  });

  test('renders project data correctly in rows', () => {
    render(<Table projects={projects} />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('50%')).toBeInTheDocument();
    expect(screen.getByText('$5000')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('30%')).toBeInTheDocument();
    expect(screen.getByText('$3000')).toBeInTheDocument();
  });
});
