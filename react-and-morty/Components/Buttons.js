import './Buttons.scss'

const Buttons = ({text}) => {
    return (
            <>
                <div className="button">
                    <div className="button__text">{text}</div>
                    
                    <div className="button__wrapper">
                        <div className="button__arrow"></div>
                        <div className="button__border-circle"></div>
                        <div className="button__mask-circle">
                        <div className="button__small-circle"></div>
                        </div>
                    </div>
                </div>
            </>
    );
};

export default Buttons;