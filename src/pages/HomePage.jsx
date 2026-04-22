import { SignedOut, SignedIn, SignInButton, SignOutButton, UserButton } from "@clerk/clerk-react";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../lib/axios";

function HomePage() {
  
  // const {data, isLoading, error} = useQuery({
  //   queryFn: () => fetch("/api/books").then(res => res.json())
  // }
  await axiosInstance.get("/session/123")
    return (
      <div>
        <button className="btn btn-secondary" onClick={() => toast.success("This is success")}>Click me</button>

        <SignedOut>
          <SignInButton mode="modal">
            <button>Login</button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <SignOutButton />
        </SignedIn>

        <UserButton />
      </div>
    )
  }

export default HomePage
