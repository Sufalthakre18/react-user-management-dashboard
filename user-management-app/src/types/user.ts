// full user from JSONPlaceholder
export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  username: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: { name: string };
}

// used in create/edit form
export interface UserFormData {
  name: string;
  email: string;
  phone: string;
  username: string;
  website: string;
}