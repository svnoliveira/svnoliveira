import { NavigationMenu } from "../NavigationMenu"

export const Header = () => {
    return (
        <header>
            <div>
                <div>
                    <div>icon</div>
                </div>
                <a 
                href="http://gmail.com" 
                target="_blank" 
                rel="noopener noreferrer">
                    Send an email
                </a>
                <button>Click to Switch to Portuguese</button>
            </div>
            <NavigationMenu />
        </header>
    )
}