import { fetchNoteById } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NoteDetailsClient from "./NoteDetails.client";
import { Metadata } from "next";
import { METADATA_OG_IMG_URL, METADATA_OG_URL } from "@/lib/const";

type NoteDetailsProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: NoteDetailsProps): Promise<Metadata> {
  const { id } = await params;
  const note = await fetchNoteById(id);

  const metadata: Metadata = {
    title: `${note.title} -  NoteHub`,
    description: `${note.content} -  NoteHub`,
    openGraph: {
      title: `${note.title} -  NoteHub`,
      description: `${note.content} -  NoteHub`,
      url: `${METADATA_OG_URL}/notes/${id}`,
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

export default async function NoteDetails({ params }: NoteDetailsProps) {
  const { id } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => {
      return fetchNoteById(id);
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );
}
