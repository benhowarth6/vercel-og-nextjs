import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const repairID = searchParams.get('repairID')
  if (!repairID) {
    return new ImageResponse(<>{'Visit with "?repairID=289"'}</>, {
      width: 1200,
      height: 630,
    })
  }

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          color: 'black',
          background: '#f6f6f6',
          fontWeight: '800',
          width: '100%',
          height: '100%',
          paddingTop: 50,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="avatar"
          width="256"
          src={`https://db.ipatchrepairs.co.uk/logo-solo.svg
          `}
        />
        <p>Repair ID: {repairID}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
