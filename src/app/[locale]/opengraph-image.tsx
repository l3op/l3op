import path from 'path';
import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { getTranslations } from 'next-intl/server';
import { LocaleProps } from '@/lib/types';

export default async function LocaleOpenGraphImage({ params }: LocaleProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  const ogFont = await readFile(path.join(process.cwd(), 'src/fonts/og-font.ttf'));
  const ogFontBold = await readFile(path.join(process.cwd(), 'src/fonts/og-font-bold.ttf'));
  return new ImageResponse(
    (
      <div style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Zain',
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
          <svg height={120} viewBox="0 0 75 65" fill="black" style={{ margin: '0 80px' }}>
            <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
          </svg>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          fontSize: 46,
          color: 'black',
          marginTop: 20,
          lineHeight: 1,
          whiteSpace: 'normal',
          textAlign: 'center',
          alignItems: 'center',
        }}
        >
          <b>{t('websiteName')}</b>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [{ name: 'Zain', data: ogFont, weight: 400, style: 'normal' }, { name: 'ZainBold', data: ogFontBold, weight: 700, style: 'normal' }]
    }
  );
}