export default function Footer() {
    // Get today's date
    const today = new Date();
    // Format the date as YYYY-MM-DD
    const formattedDate = today.toISOString().split('T')[0];

    return (
       <footer className="absolute bottom-0 w-full bg-orange-400 text-center py-4">
            <p className="text-white text-3xl">{formattedDate}</p>
       </footer>
    );
}
