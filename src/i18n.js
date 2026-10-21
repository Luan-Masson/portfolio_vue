import { createI18n } from 'vue-i18n';

const initialLocale = localStorage.getItem('lang') || 'pt';

export const i18n = createI18n({
    locale: initialLocale,
    fallbackLocale: 'en',
    missingWarn: false,
    fallbackWarn: false,
    messages: {
        pt: {},
        en: {}
    },
});

export async function loadLanguage(lang) {
    const targetLang = lang === 'en' ? 'en' : 'pt';
    const apiLang = targetLang === 'en' ? 'EN' : 'PT';
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}i18n/${apiLang}`);
        const data = await response.json();
        i18n.global.setLocaleMessage(targetLang, data);
        i18n.global.locale = targetLang;
    } catch (err) {
        console.error('Erro ao carregar traduções:', err);
    }
}

