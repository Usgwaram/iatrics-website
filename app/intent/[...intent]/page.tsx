import { redirect } from "next/navigation";

type IntentRedirectPageProps = {
  params: Promise<{
    intent?: string[];
  }>;
};

export default async function IntentRedirectPage({
  params,
}: IntentRedirectPageProps) {
  const { intent = [] } = await params;
  const destination = `/studio/intent/${intent.join("/")}`;

  redirect(destination);
}
