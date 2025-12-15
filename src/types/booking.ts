export type MeetingRequest = {
  name: string;
  email: string;
  phone: string;
  date: string; // ISO date string (YYYY-MM-DD from date input)
  time: string; // HH:mm from time input
  message?: string;
  meetingType?: string;
};

export type MeetingResponse =
  | { success: true; message: string }
  | { success: false; message: string };

