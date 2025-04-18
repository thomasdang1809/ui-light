
interface IModal {
    open: boolean;
    onClose: () => void;
    title: React.ReactNode;
    children?: React.ReactNode;
    actions?: React.ReactNode;
    size?: 'sm' | 'md' | 'lg'
}
export default IModal

