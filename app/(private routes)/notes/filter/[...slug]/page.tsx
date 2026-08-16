import { fetchNotes } from "@/lib/api/serverApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NotesPageClient from "./Notes.client";
import {
  APP_NOTES_FILTER_SLUG_PARAMS_INDEXES,
  METADATA_OG_IMG_URL,
  METADATA_OG_URL,
} from "@/lib/const";
import { Metadata } from "next";
import { capitalizeOnlyFirstLetter } from "@/lib/util";

interface NotesPageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({
  params,
}: NotesPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tagName = slug[APP_NOTES_FILTER_SLUG_PARAMS_INDEXES.TAG_NAME];

  const styledTagName = capitalizeOnlyFirstLetter(tagName);

  const metadata: Metadata = {
    title: `${styledTagName} notes - NoteHub`,
    description: `${styledTagName} notes at NoteHub (a simple and efficient personal notes manager)`,
    openGraph: {
      title: `${styledTagName} notes -  NoteHub`,
      description: `${styledTagName} notes at NoteHub (a simple and efficient personal notes manager)`,
      url: `${METADATA_OG_URL}/notes/filter/${tagName}`,
      images: [
        {
          url: METADATA_OG_IMG_URL,
          width: 1471,
          height: 980,
          alt: "NoteHub Logo",
        },
      ],
    },
  };
  return metadata;
}

export default async function NotesPage({ params }: NotesPageProps) {
  const queryClient = new QueryClient();

  const { slug } = await params;

  const tagName = slug[APP_NOTES_FILTER_SLUG_PARAMS_INDEXES.TAG_NAME];

  // note: use the same values as in default states values in AppClient
  // todo? get from a config file for the page
  const currentPageInit = 1;
  const searchQueryInit = "";

  await queryClient.prefetchQuery({
    queryKey: ["notes", tagName, searchQueryInit, currentPageInit],
    queryFn: () => {
      return fetchNotes(currentPageInit, searchQueryInit, tagName);
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesPageClient />
    </HydrationBoundary>
  );
}
