import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export const Profile = () => {
  return (
    <div className="flex w-[432px] flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-10 self-stretch">
        <Avatar>
          <AvatarImage src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/320f24da-ffd9-4f56-abb4-d10f12c434c2/ddv4su3-88bb0631-649b-46aa-b30a-abcc1648396a.jpg/v1/fill/w_882,h_906,q_70,strp/minimalist_avatar_by_burhannurul_ddv4su3-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMxNiIsInBhdGgiOiJcL2ZcLzMyMGYyNGRhLWZmZDktNGY1Ni1hYmI0LWQxMGYxMmM0MzRjMlwvZGR2NHN1My04OGJiMDYzMS02NDliLTQ2YWEtYjMwYS1hYmNjMTY0ODM5NmEuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Lk6hHRLbJa4sjRGxipcXHrWx_WF-SNoMuaUei-ycO6g" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex pt-4 flex-col justify-center items-center gap-10 self-stretch">
        <Input />
      </div>
    </div>
  );
};
