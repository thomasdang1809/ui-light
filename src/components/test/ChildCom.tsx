
interface IChildCom { 
    defaultValue?: string
    getColor: (name: string) => void
}
const ChildCom: React.FC<IChildCom> = ({ getColor, defaultValue}) => {
    const hnadleClick = () => {
        getColor('Thomas')
    }
    return (
        <div onClick={hnadleClick}>
            {defaultValue}
        </div>
    )
}
export default ChildCom