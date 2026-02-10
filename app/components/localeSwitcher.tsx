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
                borderRadius: 2,  
                minWidth: "80px",
                boxShadow: 1,
                fontWeight: "bold",
                color: "primary.main",
                backgroundColor: "primary.dark",
                ":hover": {
                    color: "primary.dark",
                    backgroundColor: "primary.main",
                },
            }}
            onClick={() => setLocale(otherLang())}>
                <LanguageIcon sx={{mr: 1}} />
                {otherLang()}
        </Button> 
    </>
  );
}
