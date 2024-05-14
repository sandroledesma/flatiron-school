const Item = ({ itemProp }) => {
    return (
        <>
            <li>{itemProp.name} (${itemProp.price})</li>
        </>
    );
}

export default Item;