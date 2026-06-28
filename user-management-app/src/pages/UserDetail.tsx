import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { User } from '../types/user';
import { fetchUserById } from '../api/users';
import SkeletonCard from '../components/SkeletonCard';

const initials = (name: string) =>
  name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);

const DetailField = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-muted mb-0.5">
      {label}
    </p>
    <p className="text-sm text-slate-text">{value}</p>
  </div>
);

const UserDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser]   = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setUser(await fetchUserById(Number(id)));
      } catch {
        setError('Could not load this user. Go back and try again.');
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  return (
    <div className="max-w-2xl mx-auto px-6 py-8">
      {/* Back link */}
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-slate-muted hover:text-teal transition-colors mb-6 no-underline"
      >
        ← Back to Users
      </Link>

      {loading && <SkeletonCard />}

      {error && (
        <div className="flex items-center gap-2 bg-danger/10 border border-danger text-danger rounded-xl px-5 py-3 text-sm">
          ⚠ {error}
        </div>
      )}

      {user && !loading && (
        <div className="bg-bg-card border border-border rounded-card p-8">
          {/* Header */}
          <div className="flex items-center gap-5 mb-8 pb-6 border-b border-border flex-wrap">
            <div className="w-20 h-20 rounded-full bg-linear-to-br from-teal to-amber flex items-center justify-center text-2xl font-bold text-bg-primary shrink-0">
              {initials(user.name)}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">{user.name}</h1>
              <p className="text-teal text-sm">@{user.username}</p>
              <p className="text-slate-muted text-xs mt-0.5">{user.company.name}</p>
            </div>
          </div>

          {/* Detail grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <DetailField label="Email"    value={user.email} />
            <DetailField label="Phone"    value={user.phone} />
            <DetailField label="Website"  value={user.website} />
            <DetailField label="City"     value={user.address.city} />
            <DetailField label="Street"   value={`${user.address.street}, ${user.address.suite}`} />
            <DetailField label="Zip Code" value={user.address.zipcode} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetail;