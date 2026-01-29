'use client';

import { Button } from '@mui/material';
import { useAppLocale } from '../../src/i18n/ClientIntlProvider';
import LanguageIcon from '@mui/icons-material/Language';

export function LocaleSwitcher() {

const {locale, setLocale} = useAppLocale();
const otherLang = () => locale == "en" ? "de" : "en";

return (  
    <>    
        <Button  
            sx={{         
                minWidth: "80px",
                boxShadow: 3,
                fontWeight: "bold",
                color: "#eda916",
                backgroundColor: "#282831",
                ":hover": {
                    color: "#282831",
                    backgroundColor: "#eda916",
                },
            }}
            onClick={() => setLocale(otherLang())}>
                <LanguageIcon sx={{mr: 1}} />
                {otherLang()}
        </Button> 
    </>
  );
}
