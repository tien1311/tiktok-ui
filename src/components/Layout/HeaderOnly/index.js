import Header from '../components/Header';

function HeaderOnLy({ children }) {
    return (
        <div>
            <Header />
            <div class="container">
                <div class="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnLy;
