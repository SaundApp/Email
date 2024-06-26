import {
  Body,
  Button,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface LinkEmailProps {
  resetLink?: string;
}

export default function ResetPassword({
  LinkEmailProps,
}: {
  LinkEmailProps: LinkEmailProps;
}) {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              primary: "#2b4872",
              muted: "#a3a3a3",
            },
          },
        },
      }}
    >
      <Html>
        <Head>
          <Font
            fontFamily="Geist"
            fallbackFontFamily="Arial"
            webFont={{
              url: "https://cdn.jsdelivr.net/npm/geist@1.3.0/dist/fonts/geist-sans/Geist-Variable.woff2",
              format: "woff2",
            }}
          />
        </Head>
        <Preview>Your reset password link</Preview>
        <Body>
          <Container>
            <Img
              src="https://i.imgur.com/0JgWeqZ.png"
              width={48}
              height={48}
              draggable={false}
              alt="Saund"
            />
            <Heading as="h1">Reset your password</Heading>

            <Section className="my-6">
              <Button className="bg-primary p-3 text-white rounded-2xl">
                Reset Password
              </Button>
              <Text className="text-base">
                If you didn't request this, please ignore this email.
              </Text>
            </Section>

            <Text className="text-base">
              Best,
              <br />- Saund Team
            </Text>

            <Hr />

            <Text className="text-muted text-sm">
              Saund Inc. 2024. All rights reserved.
            </Text>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
