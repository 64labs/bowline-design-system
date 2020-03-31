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
    group: 'Ecommerce',
    name: 'Full PDP',
    code: `<Columns cols={[1, 2, 2]}>
    <Box>
      <Image
        src="https://www.mackage.com/on/demandware.static/-/Sites-app-master-catalog/default/dw345433b0/images/ANDREA-RL-OFWH_1.jpg?sw=500&sh=800&q=70"
        fluid
        width={417}
        height={704}
      />
    </Box>
  
    <ContentBlock paddingY={["none", "large", "large"]}>
      <Stack space="large">
        <Stack>
          <Inline justify="space-between">
            <Text
              as="h1"
              heading
              size="large"
              weight="medium"
              transform="uppercase"
            >
              Andrea Jacket
            </Text>
            <Box display={["block", "none"]}>
              <Text weight="medium" size="large">
                $650.00
              </Text>
            </Box>
          </Inline>
  
          <Text>Lightweight down jacket with signature collar</Text>
  
          <Box display={["none", "block"]}>
            <Text weight="strong" size="large">
              $650.00
            </Text>
          </Box>
  
          <Divider />
  
          <Inline>
            <Inline space="xxsmall">
              <Icon name="star" size="small" />
              <Icon name="star" size="small" />
              <Icon name="star" size="small" />
              <Icon name="star" size="small" />
              <Icon name="star" size="small" />
            </Inline>
            <Text size="xsmall">Write a review</Text>
            <Text size="xsmall">Read all reviews</Text>
          </Inline>
  
          <Divider />
  
          <Stack space="small">
            <Inline space="xsmall">
              <Text weight="medium" transform="uppercase">
                Select color
              </Text>
              <Text size="xsmall" tone="secondary">
                Off white
              </Text>
            </Inline>
            <Inline>
              <Stack space="smallish" align="center">
                <Swatch size="large">
                  <Image
                    src="https://www.mackage.com/on/demandware.static/-/Sites-app-master-catalog/default/dw029bd40a/images/BLAC_SW.jpg"
                    fluid
                    width={1}
                    height={1}
                  />
                </Swatch>
                <Text size="xsmall">Black</Text>
              </Stack>
              <Stack space="smallish" align="center">
                <Swatch size="large" selected>
                  <Image
                    src="https://www.mackage.com/on/demandware.static/-/Sites-app-master-catalog/default/dwf94164cc/images/OFWH_SW.png"
                    fluid
                    width={1}
                    height={1}
                  />
                </Swatch>
                <Text size="xsmall">Off White</Text>
              </Stack>
              <Stack space="smallish" align="center">
                <Swatch size="large">
                  <Image
                    src="https://www.mackage.com/on/demandware.static/-/Sites-app-master-catalog/default/dw6538e60e/images/PETA_SW.jpg"
                    fluid
                    width={1}
                    height={1}
                  />
                </Swatch>
                <Text size="xsmall">Petal</Text>
              </Stack>
            </Inline>
          </Stack>
  
          <Divider />
  
          <Stack space="small">
            <Text weight="medium" transform="uppercase">
              Select size
            </Text>
            <Inline space="none">
              <Button
                boxShadow="none"
                paddingX="none"
                width="xlarge"
                border="standard"
                borderRadius="none"
                borderColor="subtle"
                weight="weak"
              >
                <Text size="small" weight="medium" baseline={false}>
                  XXS
                </Text>
              </Button>
              <Button
                boxShadow="none"
                paddingX="none"
                width="xlarge"
                border="standard"
                borderRadius="none"
                borderColor="subtle"
                weight="weak"
              >
                <Text size="small" weight="medium" baseline={false}>
                  XXS
                </Text>
              </Button>
              <Button
                boxShadow="none"
                paddingX="none"
                width="xlarge"
                border="standard"
                borderRadius="none"
                borderColor="subtle"
                weight="weak"
              >
                <Text size="small" weight="medium" baseline={false}>
                  XS
                </Text>
              </Button>
              <Button
                boxShadow="none"
                paddingX="none"
                width="xlarge"
                border="standard"
                borderRadius="none"
                borderColor="subtle"
                weight="weak"
              >
                <Text size="small" weight="medium" baseline={false}>
                  M
                </Text>
              </Button>
              <Button
                weight="weak"
                boxShadow="none"
                paddingX="none"
                width="xlarge"
                border="standard"
                borderRadius="none"
                borderColor="brand"
                background="brand"
              >
                <Text size="small" weight="medium" baseline={false}>
                  L
                </Text>
              </Button>
              <Button
                boxShadow="none"
                paddingX="none"
                width="xlarge"
                border="standard"
                borderRadius="none"
                borderColor="subtle"
                weight="weak"
              >
                <Text size="small" weight="medium" baseline={false}>
                  XL
                </Text>
              </Button>
            </Inline>
  
            <Text size="small">
              FITTED – Our signature fit, closest to the body. Designed to be
              worn with light layers, all while keeping you warm. For heavier
              layering, we recommend sizing up.
            </Text>
          </Stack>
  
          <Divider />
  
          <Button background="brand" borderRadius="none" size="large">
            <Text baseline={false} weight="strong">
              ADD TO BAG
            </Text>
          </Button>
        </Stack>
  
        <Stack space="none">
          <Divider />
          <Box>
            <Button
              background="transparent"
              innerJustify
              paddingX="none"
              iconRight="plus"
              iconSize="gutter"
            >
              <Text baseline={false} weight="medium" transform="uppercase">
                Description
              </Text>
            </Button>
  
            <Box paddingTop="xsmall" paddingBottom="gutter">
              <Text size="small">
                ANDREA by MACKAGE is a sleek, fitted lightweight down coat made
                with two-way stretch nylon for ease of movement. Leather details
                at the front zipper closure and zippered welt pockets give
                ANDREA an edge. Featuring Mackage’s signature collar and hood
                for an iconic silhouette, ANDREA will protect you from the
                elements and keep you looking sharp.
              </Text>
            </Box>
          </Box>
  
          <Divider />
  
          <Box>
            <Button
              background="transparent"
              innerJustify
              paddingX="none"
              iconRight="plus"
              iconSize="gutter"
            >
              <Text baseline={false} weight="medium" transform="uppercase">
                Product Details
              </Text>
            </Button>
          </Box>
          <Divider />
          <Box>
            <Button
              background="transparent"
              innerJustify
              paddingX="none"
              iconRight="plus"
              iconSize="gutter"
            >
              <Text baseline={false} weight="medium" transform="uppercase">
                Free Shiiping & Returns
              </Text>
            </Button>
          </Box>
        </Stack>
      </Stack>
    </ContentBlock>
  </Columns>`,
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
