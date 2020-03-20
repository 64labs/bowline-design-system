export default [
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
