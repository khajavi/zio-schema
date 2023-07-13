const sidebars = {
  sidebar: [
    {
      type: "category",
      label: "ZIO Schema",
      collapsed: false,
      link: { type: "doc", id: "index" },
      items: [
        "motivation",
        "use-cases",
        "basic-building-blocks",
        {
          type: "category",
          label: "Writing Schema",
          collapsed: true,
          items: [
            "manual-schema-construction",
            "automatic-schema-derivation"
          ],
        },
        "operations",
        "transforming-schemas",
        "codecs",
        "protobuf-example",
        "combining-different-encoders",
        {
            type: "category",
            label: "Examples",
            collapsed: true,
            items: [
                "mapping-dto-to-domain-object" 
            ],
        }
      ],
    },
  ],
};

module.exports = sidebars;
