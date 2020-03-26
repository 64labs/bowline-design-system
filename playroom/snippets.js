export default [
  {
    group: 'Cards',
    name: 'Pretty',
    code: `
    <Box
      style={{
        background: "linear-gradient(43deg, rgba(34,193,195,1) 0%, rgba(231,45,253,1) 100%)"
      }}
      padding="gutter"
      minHeight="fullvh"
    >
      <Box borderRadius="medium" style={{ maxWidth: 375, margin: "0 auto" }}>
        <Box
          borderRadius="medium"
          overflow="hidden"
          style={{ filter: "drop-shadow(0 0 20px rgba(0,0,0,0.1))" }}
        >
          <Image
            src="https://picsum.photos/600/850"
            fluid
            height={850}
            width={600}
          />
        </Box>
        <Box
          background="white"
          position="relative"
          borderRadius="medium"
          padding="gutter"
          marginX="smallish"
          style={{
            transform: "translateY(-66%)",
            boxShadow: "0 0 30px rgba(0,0,0,0.3)"
          }}
        >
          <Stack>
            <Stack space="medium">
              <Stack space="smallish">
                <Text tone="promote" weight="strong" size="xsmall">
                  Editor's Pick
                </Text>

                <Inline justify="space-between">
                  <Text heading weight="medium">
                    Pretty Picture
                  </Text>
                  <Text weight="strong" size="xlarge">
                    $39
                  </Text>
                </Inline>

                <Text tone="secondary" size="small">
                  354 Bowline St, Tampa, FL
                </Text>
              </Stack>

              <Inline spread dividers>
                <Stack align="center" space="xsmall">
                  <Icon name="award" tone="secondary" />
                  <Text size="xsmall" tone="secondary">
                    Winner
                  </Text>
                </Stack>

                <Stack align="center" space="xsmall">
                  <Icon name="moon" tone="secondary" />
                  <Text size="xsmall" tone="secondary">
                    24 hrs
                  </Text>
                </Stack>

                <Stack align="center" space="xsmall">
                  <Icon name="wifi" tone="secondary" />
                  <Text size="xsmall" tone="secondary">
                    Wifi
                  </Text>
                </Stack>
              </Inline>
            </Stack>

            <Button size="small" iconRight="arrow-right">
              Book now
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
    `,
  },
  {
    group: 'Box',
    name: 'Responsive padding',
    code: `
    <Box background="secondary" padding={["small", "medium", "xxlarge"]}>
      <Placeholder height={100} />
    </Box>
    `,
  },
  {
    group: 'Button',
    name: 'Default',
    code: `<Box padding="small"><Button>Press Me</Button></Box>`,
  },
  {
    group: 'Button',
    name: 'Strong',
    code: `<Box padding="small"><Button weight="strong">Press Me</Button></Box>`,
  },
  {
    group: 'Button',
    name: 'Weak',
    code: `<Box padding="small"><Button weight="weak">Press Me</Button></Box>`,
  },
  {
    group: 'Button',
    name: 'Icon',
    code: `<Box padding="small"><Button icon="search">Search</Button></Box>`,
  },
  {
    group: 'Button',
    name: 'Icon only',
    code: `<Box padding="small"><Button icon="close"/></Box>`,
  },
  {
    group: 'Text',
    name: 'Baseline cropping',
    code: `
    <Stack padding="gutter">
      <Box background="promote">
        <Text heading size="xsmall">
          Hellog Olego
        </Text>
      </Box>
      <Box background="promote">
        <Text heading size="small">
          Hellog Olego
        </Text>
      </Box>
      <Box background="promote">
        <Text heading size="standard">
          Hellog Olego
        </Text>
      </Box>
      <Box background="promote">
        <Text heading size="large">
          Hellog Olego
        </Text>
      </Box>
      <Box background="promote">
        <Text heading size="xlarge">
          Hellog Olego
        </Text>
      </Box>

      <Box background="promote">
        <Text size="xsmall">Hellog Olego</Text>
      </Box>
      <Box background="promote">
        <Text size="small">Hellog Olego</Text>
      </Box>
      <Box background="promote">
        <Text size="standard">Hellog Olego</Text>
      </Box>
      <Box background="promote">
        <Text size="large">Hellog Olego</Text>
      </Box>
      <Box background="promote">
        <Text size="xlarge">Hellog Olego</Text>
      </Box>
    </Stack>

    `,
  },
  {
    group: 'Columns',
    name: 'Responsive',
    code: `<Columns cols={6} padding="large">
      <Column span={[3, 1]}>
        <Placeholder height={50} />
      </Column>
      <Column span={[3, 4]}>
        <Placeholder height={50} />
      </Column>
      <Column span={[6, 1]}>
        <Placeholder height={50} />
      </Column>
    </Columns>`,
  },
  {
    group: 'Layout',
    name: 'Product list',
    code: `
    <Stack align="center" paddingY={["gutter", "medium", "large"]}>
    <Text heading size="xlarge">
      Nice Stuff
    </Text>
    <ScrollBox>
      <Inline space="smallish" paddingX="small">
        {[
          "Puppies",
          "Kittens",
          "Chonkers",
          "Snuggles",
          "Candy",
          "Derpy Dogs"
        ].map(item => (
          <Button weight="weak" size="small">
            {item}
          </Button>
        ))}
      </Inline>
    </ScrollBox>
  </Stack>
  <Divider />
  <ContentBlock paddingY="large" paddingX={["none", "gutter"]}>
    <Columns cols={[1, 5]}>
      <Column span={1} display={["none", "block"]}>
        <Stack>
          <Text tone="secondary">6 items</Text>
          <Text heading size="standard">
            Nice Stuff
          </Text>
          <Stack as="ul">
            {[
              "Puppies",
              "Kittens",
              "Chonkers",
              "Snuggles",
              "Candy",
              "Derpy Dogs"
            ].map(item => (
              <Text as="li">{item}</Text>
            ))}
          </Stack>
        </Stack>
      </Column>
      <Column span={4}>
        <Columns cols={[2, 2, 3]} colGap={["xxsmall", "gutter"]}>
          {[237, 1025, 1074, 239, 169, 200].map(i => (
            <Stack space="smallish">
              <Image
                src={\`https://picsum.photos/id/\${i}/400/500\`}
                width={4}
                height={5}
                fluid
              />
              <Stack
                space="smallish"
                paddingBottom="gutter"
                paddingX={["xsmall", "none"]}
              >
                <Text size="standard" weight="medium">
                  Cute Pet {i}
                </Text>
                <Text>$100</Text>
              </Stack>
            </Stack>
          ))}
        </Columns>
      </Column>
    </Columns>
  </ContentBlock>
    `,
  },
]
