import { Link } from 'react-router-dom';
import type { User } from '../types/user';

interface Props {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

// Generate 2-letter initials from full name
const initials = (name: string) =>
  name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);

const UserCard = ({ user, onEdit, onDelete }: Props) => (
  <div className="group bg-bg-card border border-border rounded-l p-3 transition-all duration-250 hover:border-teal hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,229,200,0.1)]">
    {/* Header: avatar + name */}
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 rounded-full bg-amber flex items-center justify-center text-sm font-bold text-bg-primary shrink-0">
        {initials(user.name)}
      </div>
      <div className="min-w-0">
        <Link
          to={`/user/${user.id}`}
          className="block font-semibold text-slate-text hover:text-teal transition-colors truncate no-underline"
        >
          {user.name}
        </Link>
        <p className="text-xs text-slate-muted truncate">@{user.username}</p>
      </div>
    </div>

    {/* Contact info */}
    <div className="space-y-1.5 mb-5">
      {[
        { icon: '✉', value: user.email },
        { icon: '☎', value: user.phone },
        { icon: '🌐', value: user.website },
      ].map(({ icon, value }) => (
        <p key={value} className="flex items-center gap-2 text-sm text-slate-muted truncate">
          <span className="text-teal text-xs w-4 shrink-0">{icon}</span>
          {value}
        </p>
      ))}
    </div>

    {/* Action buttons */}
    <div className="flex gap-2 flex-wrap">
      <Link
        to={`/user/${user.id}`}
        className="px-3 py-1.5 rounded-(--radius-btn) text-xs font-semibold border border-border text-slate-text hover:border-teal hover:text-teal transition-all no-underline"
      >
        View
      </Link>
      <button
        onClick={() => onEdit(user)}
        className="px-3 py-1.5 rounded-(--radius-btn) text-xs font-semibold border border-amber text-amber hover:bg-amber hover:text-bg-primary transition-all cursor-pointer"
      >
        Edit
      </button>
      <button
        onClick={() => onDelete(user.id)}
        className="px-3 py-1.5 rounded-(--radius-btn) text-xs font-semibold border border-danger text-danger hover:bg-danger hover:text-white transition-all cursor-pointer"
      >
        Delete
      </button>
    </div>
  </div>
);

export default UserCard;