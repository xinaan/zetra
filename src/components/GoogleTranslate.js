import { useEffect } from 'react';

const GoogleTranslate = () => {
    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({
        pageLanguage: 'en', includedLanguages: 'tr',
        autoDisplay: false, layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT }, 'google_translate_element')
    }
    useEffect(() => {
        var addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
    }, [])
    return (
        // <div className="w-screen h-screen fixed top-0 left-0 bg-gray-700 backdrop-blur-sm bg-opacity-75 z-50">
            // <div className="flex items-stretch w-screen h-screen mx-auto my-auto">
                <div className=''>
                    <div id="google_translate_element" > </div>
                 </div>
            // </div>
        // </div> 
        
    );
}
 
export default GoogleTranslate;