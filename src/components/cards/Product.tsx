import Rating from "../rating/Rating";


const Product: React.FC = () => {
    return (
        <div className="card">
            <img src="../../src/assets/images/image.png" />
            <div className="card-body">
                <p>Pro Tech Gear</p>
                <h6>Cropped Satin Bomber Jacket</h6>
                <Rating />
                <p>
                    <span>120$</span>
                    <strong>100$</strong>
                </p>
                <button className="button filled primary">Add to Cart</button>
            </div>

        </div>
    );
};

export default Product;