import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import type { User, UserFormData } from '../types/user';
import {fetchUsers,createUser,updateUser,deleteUser,} from '../api/users';
import UserCard from '../components/UserCard';
import UserForm from '../components/UserForm';
import SkeletonCard from '../components/SkeletonCard';

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [showForm, setShowForm] = useState(false);

  const [editingUser, setEditingUser] =
    useState<User | null>(null);

  const [isSubmitting, setSubmitting] =
    useState(false);

  // Fetch users on component mount
  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);

        const data = await fetchUsers();

        setUsers(data);
      } catch {
        setError('Failed to load users. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  // Open add user form
  const openAdd = () => {
    setEditingUser(null);
    setShowForm(true);
  };

  // Open edit form
  const openEdit = (user: User) => {
    setEditingUser(user);
    setShowForm(true);
  };

  // Close modal
  const closeForm = () => {
    setShowForm(false);
    setEditingUser(null);
  };

  // Create or update user
  const handleSubmit = async (
    data: UserFormData
  ) => {
    try {
      setSubmitting(true);
    // Update existing user
      if (editingUser) {
        const updatedUser = await updateUser(editingUser.id,data);

        setUsers((prev) =>
          prev.map((user) =>
            user.id === editingUser.id
              ? { ...user, ...updatedUser }
              : user
          )
        );

        toast.success('User updated!');
      }

      // Create new user
      else {
        const newUser = await createUser(data);

        setUsers((prev) => [{...newUser,id: Date.now(),},...prev,]);

        toast.success('User added!');
      }

      closeForm();
    } catch {
      toast.error(
        'Something went wrong. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  // Delete user
  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm(
      'Delete this user?'
    );

    if (!confirmDelete) return;

    try {
      await deleteUser(id);

      setUsers((prev) =>
        prev.filter((user) => user.id !== id)
      );

      toast.success('User deleted!');
    } catch {
      toast.error('Failed to delete user.');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">

      {/* Header */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <h1 className="text-2xl font-bold text-white">
          All{' '}
          <span className="text-teal">
            Users
          </span>
        </h1>

        <button
          onClick={openAdd}
          className="px-4 py-2 rounded-(--radius-btn) text-sm font-bold bg-teal text-bg-primary hover:bg-teal-dim transition-all cursor-pointer"
        >
          + Add User
        </button>
      </div>

      {/* Error State */}
      {error && (
        <div className="flex items-center gap-2 bg-danger/10
         border border-danger text-danger rounded-xl px-5 py-3 mb-6 text-sm">
          ⚠ {error}
        </div>
      )}

      {/* Loading Skeleton */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : users.length === 0 ? (

        /* Empty State */
        <div className="text-center py-20 text-slate-muted">
          No users found.
        </div>

      ) : (

        /* User Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onEdit={openEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {/* Create / Edit Modal */}
      {showForm && (
        <UserForm
          title={
            editingUser
              ? 'Edit User'
              : 'Add New User'
          }
          initialData={
            editingUser
              ? {
                  name: editingUser.name,
                  email: editingUser.email,
                  phone: editingUser.phone,
                  username: editingUser.username,
                  website: editingUser.website,
                }
              : undefined
          }
          onSubmit={handleSubmit}
          onCancel={closeForm}
          isSubmitting={isSubmitting}
        />
      )}
    </div>
  );
};

export default Home;