export interface CardProps {
    title: string;
    content: string;
    
}

export interface PostModalProps {
    onClick?: () => void;
}
export interface ButtonProps {
    type?: "button" | "submit" | "reset";
    size: string;
    shape: string;
    text: string;
    background: string;
    onClick?: () => void;
}