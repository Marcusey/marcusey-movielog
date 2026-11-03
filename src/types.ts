export type Status = "Own" | "Want";
export type Format = "DVD" | "Blu-ray";

export type Film = {
  id: string;
  title: string;
  subtitle?: string;
  category?: Format;
  status?: Status;
  rating?: number | null;
  imageUrl?: string;
  notes?: string;
  tags?: string[];
  date?: string;
  createdAt: string;
  updatedAt: string;
};