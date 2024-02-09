import Nav from "./Nav"; 

function Header(props) { 
    
    return ( 
    <header> 
        <div class="container">
            <input id="responsive-menu" type="checkbox"></input>
            <label for="responsive-menu"><span id="menu-icon"></span></label>
            <ul>
                <Nav />
            </ul>
        </div>   
    </header> 
    ); 
} 
    
export default Header;
