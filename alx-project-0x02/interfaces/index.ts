export interface CardProps {
    title: string;
    content: string;
    
}

export interface PostModalProps {
    onClick?: () => void;
}
export interface ButtonProps {
    type?: "button" | "submit" | "reset";
    size: "small" | "medium" | "large";
    shape: "rounded-sm" | "rounded-md" | "rounded-lg";
    text: string;
    background: string;
    onClick?: () => void;
}

export interface PostCardProps {
    title: string;
    content : string;
    userId: number;

}
export interface Post {
    id?: number;
    title: string;
    body: string;
    userId: number;
  }
 
  export interface PostsProps {
    posts: Post[]
  }
  export interface User  {
    id?: number;
    name:string; 
    email: string;
    address: Address;
  }
  export interface Address {
    street: string;
    city: string;
  }
  export interface UserProps{
    users: User[]
  }