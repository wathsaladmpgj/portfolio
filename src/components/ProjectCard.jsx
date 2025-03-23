// components/Card.js
const Card = ({ title, description,price }) => {
    return (
            <div className="max-w-sm rounded-2xl gap-6 overflow-hidden shadow-lg bg-white p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">{title}</h2>
                <p className="text-gray-600">{description}</p>
                <p className="text-gray-600">{price}</p>
            </div>
    );
};

export default Card;
