'use client';

import { Button, Link } from '@mui/material';
import { useAppLocale } from '../../src/i18n/ClientIntlProvider';
import LanguageIcon from '@mui/icons-material/Language';

export function LocaleSwitcher() {

const {locale, setLocale} = useAppLocale();
const otherLang = () => locale == "en" ? "de" : "en";

return (  
    <>    
        <Link
            sx={{
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 0.2,
            }}
            onClick={() => setLocale(otherLang())}
        >
            <LanguageIcon sx={{ fontSize: 18 }} />
            {otherLang().toUpperCase()}
        </Link>
    </>
  );
}
