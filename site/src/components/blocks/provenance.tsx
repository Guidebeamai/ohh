import { Card } from "@/components/ui/card";

const sources = [
  { code: "self_declared", meaning: "You said so", example: "“Python: expert”, typed by you" },
  {
    code: "assessed",
    meaning: "A named, validated assessment measured it",
    example: "An interest profile from a published instrument",
  },
  {
    code: "first_party",
    meaning: "Recorded by the system that saw it happen",
    example: "A course completion from the provider's records",
  },
  {
    code: "attested",
    meaning: "A named third party vouches for it",
    example: "An employer's report at the end of a placement",
  },
  {
    code: "inferred",
    meaning: "Worked out by software, including AI",
    example: "Skills an AI extracted from a CV",
  },
];

export const Provenance = () => {
  return (
    <section id="provenance" className="py-28 lg:py-32">
      <div className="container max-w-5xl">
        <div className="grid items-center gap-3 md:gap-0 lg:grid-cols-2">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Every claim says where it came from
          </h2>
          <p className="text-muted-foreground leading-snug lg:pl-10">
            From v0.3, each skill, reference and result records its source. The standard
            labels the evidence. It never turns it into a score.
          </p>
        </div>

        <Card className="mt-8 overflow-hidden rounded-3xl md:mt-12 lg:mt-16">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="bg-muted/50 border-b">
                  <th scope="col" className="px-6 py-3 text-left font-medium">
                    Source
                  </th>
                  <th scope="col" className="px-6 py-3 text-left font-medium">
                    What it means
                  </th>
                  <th scope="col" className="px-6 py-3 text-left font-medium">
                    Example
                  </th>
                </tr>
              </thead>
              <tbody>
                {sources.map((source) => (
                  <tr
                    key={source.code}
                    className="hover:bg-muted/40 border-b transition-colors last:border-0"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <code className="bg-muted rounded px-1.5 py-0.5 font-mono text-[13px] font-medium">
                        {source.code}
                      </code>
                    </td>
                    <td className="px-6 py-4 font-medium">{source.meaning}</td>
                    <td className="text-muted-foreground px-6 py-4">{source.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
};
