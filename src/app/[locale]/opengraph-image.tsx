import { ImageResponse } from 'next/og';
import { getTranslations } from 'next-intl/server';

export default async function LocaleOpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Manifest' });
  return new ImageResponse(
    <div style={{
      display: 'flex',
      height: '100%',
      width: '100%',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      backgroundColor: 'white',
      backgroundImage: 'radial-gradient(circle at 25px 25px, yellow 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
      backgroundSize: '100px 100px',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
      }}>
        <svg height={80} viewBox="0 0 75 65" fill="black" style={{ margin: '0 75px' }}>
          <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
        </svg>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        fontSize: 48,
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        color: 'black',
        marginTop: 30,
        lineHeight: 1.8,
        whiteSpace: 'normal',
        maxWidth: '80%',
        textAlign: 'center',
        alignItems: 'center',
      }}
      >
        <b>{t('name')}</b>
        <b>{t('description')}</b>
      </div>
    </div>
  );
}