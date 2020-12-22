export interface Todo {
  id?: string;
  title: string;
  done: boolean;
}

export interface LoginFormObject {
  email: string;
  password: string;
}

export interface DynamicComponent {
  type: string;
  label: string;
  defaultValue: string | null;
  id?: string;
}
