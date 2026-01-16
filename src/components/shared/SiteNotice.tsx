interface SiteNoticeProps {
  variant?: "default" | "compact";
  className?: string;
}

const SiteNotice = ({ variant = "default", className = "" }: SiteNoticeProps) => {
  if (variant === "compact") {
    return (
      <p className={`text-xs text-muted-foreground leading-relaxed ${className}`}>
        <strong>Independent Retailer:</strong> NationTechMart is not affiliated with, endorsed by, or sponsored by HP or any other manufacturer. HP is a registered trademark of HP Inc. All trademarks are property of their respective owners.
      </p>
    );
  }

  return (
    <div className={`p-5 bg-muted/20 rounded-xl border border-border/60 ${className}`}>
      <p className="text-sm text-muted-foreground text-center leading-relaxed">
        <strong className="text-foreground">Disclaimer:</strong> NationTechMart is an independent retailer and is not affiliated with, endorsed by, or sponsored by HP or any other manufacturer. HP is a registered trademark of HP Inc. All product names, logos, and brands are property of their respective owners.
      </p>
    </div>
  );
};

export default SiteNotice;
