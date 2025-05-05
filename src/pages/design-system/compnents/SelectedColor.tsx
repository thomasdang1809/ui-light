

const SelectedColor: React.FC<{ color: string }> = ({ color }) => {
    return (
        <>
            <div className="selected-color">{color}</div>
        </>
        

    );
};

export default SelectedColor;