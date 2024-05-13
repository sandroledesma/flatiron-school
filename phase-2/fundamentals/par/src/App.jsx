// A React component is a function that returns JSX (JS + HTML) 
// We can optionally export the function to use it in other files. 

export const App = () => { // export can be written at the bottom of the JSX file as "export default App;"
    const buildTool = "Parcel";
    const link = "https://www.google.com";
    return ( // returns the function so it can be used in other places in the future 
        <>
        <h1> {buildTool} + React!</h1>
        <a href={link}>Google</a>
        </>
    ); 
};