import localFont from "next/font/local";
import { Box, Button, Typography } from "@mui/material";
import Head from "next/head";
import {useRouter} from 'next/router';

const medusaFont = localFont({ src: "../../fonts/Medusa.otf" });

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Nisaba</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
        <Typography
            variant="h1"
            component="h1"
            fontWeight={400}
            marginBottom={0}
            style={medusaFont.style}
            letterSpacing={10}
          >
            Nisaba
          </Typography>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.unleash.ai/wp-content/uploads/2021/10/textkernel-white-resized-new.png"
            height={70}
            style={{ objectFit: "contain" }}
            alt="logo"
          />
          <Button variant="text" size="small" sx={{marginTop: 5, borderRadius: 16}} onClick={() => void router.push('/chat')}>Chat</Button>
      </Box>
    </>
  );
}
