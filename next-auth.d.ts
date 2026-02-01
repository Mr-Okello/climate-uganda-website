import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      region: string;
      district?: string | null;
      avatarUrl?: string | null;
      name?: string | null;
      email?: string | null;
    };
  }

  interface User {
    role: string;
    region: string;
    district?: string | null;
    avatarUrl?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    region?: string;
    district?: string | null;
    avatarUrl?: string | null;
  }
}
